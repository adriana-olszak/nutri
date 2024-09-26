-- DropForeignKey
ALTER TABLE "table_view_column_views" DROP CONSTRAINT "table_view_column_views_table_view_definition_id_fkey";

-- AddForeignKey
ALTER TABLE "table_view_column_views" ADD CONSTRAINT "table_view_column_views_table_view_definition_id_fkey" FOREIGN KEY ("table_view_definition_id") REFERENCES "table_view_definitions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
