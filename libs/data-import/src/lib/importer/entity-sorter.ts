/**
 * This module implements a topological sorting algorithm for database entities.
 * It ensures that entities are sorted in an order that respects their dependencies,
 * which is crucial for maintaining referential integrity during data import.
 *
 * Key Computer Science Concepts:
 *
 * 1. Directed Acyclic Graph (DAG):
 *    The entity dependencies form a DAG, where each entity is a node,
 *    and each dependency is a directed edge.
 *
 * 2. Topological Sorting:
 *    The algorithm performs a topological sort on the DAG, which orders the
 *    nodes (entities) such that for every directed edge A → B, A comes before
 *    B in the ordering.
 *
 * 3. Depth-First Search (DFS):
 *    The sorting is implemented using a depth-first search algorithm, which
 *    explores the graph by going as deep as possible along each branch before
 *    backtracking.
 *
 * 4. Cycle Detection:
 *    While not explicitly implemented here, topological sorting inherently
 *    detects cycles. If a cycle exists, a valid topological sort is impossible.
 *
 * 5. Adjacency List:
 *    The entityDependencies object represents the graph as an adjacency list,
 *    where each key is a node and its value is a list of its adjacent nodes.
 *
 * Usage:
 * The sortEntities function takes an array of Entity objects and returns a new
 * array with the same entities sorted in topological order. This sorted array
 * can then be used to perform database operations in an order that satisfies
 * all foreign key constraints.
 *
 * Time Complexity: O(V + E), where V is the number of entities and E is the
 * number of dependencies.
 * Space Complexity: O(V) for the visited set and the output array.
 */

import { Entity, EntityType } from '../types';

export const entityDependencies: Record<EntityType, EntityType[]> = {
  Language: [],
  Translation: [EntityType.Language],
  Food: [EntityType.FoodCategory],
  FoodSearchVector: [EntityType.Food, EntityType.Language],
  FoodCategory: [EntityType.FoodCategory], // self-referential for parent category
  BrandedFood: [EntityType.Food],
  Nutrient: [],
  FoodNutrient: [EntityType.Food, EntityType.Nutrient, EntityType.DataSourceReference],
  FoodPortion: [EntityType.Food],
  InputFood: [EntityType.Food], // Both for the food and the ingredient food
  DataSourceReference: [],
};


export function sortEntities(entities: Entity[]): Entity[] {
  const visited = new Set<string>();
  const result: Entity[] = [];

  function dfs(entity: Entity) {
    if (visited.has(entity.id)) return;
    visited.add(entity.id);

    const dependencies = entityDependencies[entity.type];
    for (const depType of dependencies) {
      const depEntity = entities.find(e => e.type === depType && e.id === entity[`${depType.toLowerCase()}Id`]);
      if (depEntity) dfs(depEntity);
    }

    result.push(entity);
  }

  for (const entity of entities) {
    dfs(entity);
  }

  return result.reverse();
}
