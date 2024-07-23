# Architectural Decision Log: Unit Testing Approach

## 1. Focus on Testing Behavior, Not Implementation

**Decision:** Test the external behavior of code rather than its internal implementation.

**Rationale:** This approach allows for easier refactoring and focuses on what's important - the external behavior of our code.

**Example:**

```typescript
// Instead of this:
it('should call userRepository.findOne with correct params', () => {
  const spy = jest.spyOn(userRepository, 'findOne');
  service.getUserById('123');
  expect(spy).toHaveBeenCalledWith('123');
});

// Do this:
it('should return the correct user when given a valid id', async () => {
  const user = await service.getUserById('123');
  expect(user).toEqual(expect.objectContaining({
    id: '123',
    name: expect.any(String)
  }));
});
```

## 2. Use a Balanced Approach to Mocking

**Decision:** Use mocking judiciously, balancing isolation with real-world scenario testing.

**Rationale:** While mocking is useful for isolation, overuse can lead to tests that don't reflect real-world scenarios.

**Example:**

```typescript
describe('UserService', () => {
  let service: UserService;
  let userRepository: jest.Mocked<UserRepository>;

  beforeEach(() => {
    userRepository = {
      findOne: jest.fn(),
      save: jest.fn(),
    } as any;
    service = new UserService(userRepository);
  });

  it('should create a user', async () => {
    const userData = { name: 'John Doe', email: 'john@example.com' };
    userRepository.save.mockResolvedValue({ id: '123', ...userData });

    const result = await service.createUser(userData);

    expect(result).toEqual(expect.objectContaining({
      id: expect.any(String),
      ...userData
    }));
    expect(userRepository.save).toHaveBeenCalledWith(userData);
  });
});
```

## 3. Use "Given-When-Then" Structure for Tests

**Decision:** Structure tests using the "Given-When-Then" pattern.

**Rationale:** This structure provides clarity and consistency across tests.

**Example:**

```typescript
it('should mark a task as complete', () => {
  // Given
  const task = { id: '123', title: 'Test Task', completed: false };
  taskRepository.findOne.mockResolvedValue(task);

  // When
  const result = await service.markTaskAsComplete('123');

  // Then
  expect(result.completed).toBe(true);
  expect(taskRepository.save).toHaveBeenCalledWith(expect.objectContaining({
    id: '123',
    completed: true
  }));
});
```

## 4. Write Tests as Documentation

**Decision:** Craft tests to serve as documentation for code usage.

**Rationale:** This helps keep documentation up-to-date and demonstrates code usage.

**Example:**

```typescript
describe('Authentication Service', () => {
  describe('login', () => {
    it('should return a token when given valid credentials', async () => {
      const result = await authService.login('user@example.com', 'password123');
      expect(result).toHaveProperty('token');
    });

    it('should throw an error when given invalid credentials', async () => {
      await expect(authService.login('user@example.com', 'wrongpassword'))
        .rejects.toThrow('Invalid credentials');
    });
  });
});
```

## 5. Aim for High, But Not Necessarily 100% Code Coverage

**Decision:** Set a high code coverage target without mandating 100%.

**Rationale:** While high coverage is good, 100% can lead to writing tests for the sake of coverage rather than value.

**Implementation:** Set up coverage reports in your CI/CD pipeline, but don't block merges on 100% coverage. Instead, aim for a high percentage (e.g., 80%) and require explanations for uncovered code.

## 6. Use Property-Based Testing for Complex Inputs

**Decision:** Implement property-based testing for functions with complex input spaces.

**Rationale:** This can uncover edge cases that manual test writing might miss.

**Example (using fast-check library):**

```typescript
import * as fc from 'fast-check';

it('should always return a sorted array', () => {
  fc.assert(
    fc.property(fc.array(fc.integer()), (arr) => {
      const sorted = service.sortArray(arr);
      expect(sorted).toEqual(arr.sort((a, b) => a - b));
    })
  );
});
```

## 7. Allow Direct Testing of Complex Private Methods

**Decision:** Permit direct testing of complex private methods when necessary.

**Rationale:** While we generally focus on public interfaces, some complex private methods benefit from direct testing.

**Implementation:** Use TypeScript's type system to expose private methods for testing:

```typescript
class ComplexService {
  private complexCalculation(a: number, b: number): number {
    // Complex logic here
  }
}

type TestableComplexService = ComplexService & {
  complexCalculation: (a: number, b: number) => number;
};

describe('ComplexService', () => {
  it('should perform complex calculation correctly', () => {
    const service = new ComplexService() as TestableComplexService;
    expect(service.complexCalculation(5, 3)).toBe(/* expected result */);
  });
});
```

