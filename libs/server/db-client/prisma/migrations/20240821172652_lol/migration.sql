-- AlterTable
ALTER TABLE "Questionnaire" ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "QuestionnaireVersion" ADD COLUMN     "deletedAt" TIMESTAMP(3);
