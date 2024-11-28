import React from 'react';
import { observer } from 'mobx-react-lite';
import { useRecipesStore } from '../../../hooks/useStore';

export const RecipesActions = observer(() => {
  const store = useRecipesStore();

  const handleDelete = () => {
    console.log(' >>>>>>>>>@> handleDelete ()');

    // Implement delete logic
    // store.organizations.deleteMany(selectedIds);
  };

  const handleEdit = () => {
    console.log(' >>>>>>>>>@> handleEdit ()');

    // Implement edit logic
    // store.ui.openEditModal(selectedIds[0]);
  };

  return (
    <div>
      <button onClick={handleDelete}> Delete
      </button>
      <button
        onClick={handleEdit}> Edit
      </button>
    </div>
  );
});
