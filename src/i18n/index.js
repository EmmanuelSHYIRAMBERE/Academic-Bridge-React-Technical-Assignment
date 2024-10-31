import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      title: 'Todo List',
      user: 'User',
      filters: {
        all: 'All',
        active: 'Active',
        completed: 'Completed'
      },
      status: {
        in_progress: 'In Progress',
        completed: 'Completed',
        pending: 'Pending',
        cancelled: 'Cancelled'
      },
      buttons: {
        more_options: 'More options',
        toggle_theme: 'Toggle theme',
        add_todo: 'Add Todo',
        save: 'Save',
        cancel: 'Cancel',
        delete: 'Delete'
      },
      messages: {
        count: '{{count}} messages',
        count_plural: '{{count}} messages',
        no_messages: 'No messages',
        added: 'Todo added successfully',
        updated: 'Todo updated successfully',
        deleted: 'Todo deleted successfully'
      },
      errors: {
        loading: 'Error loading todos',
        adding: 'Error adding todo',
        updating: 'Error updating todo',
        deleting: 'Error deleting todo',
        general: 'Something went wrong'
      },
      placeholders: {
        search: 'Search todos...',
        todo_title: 'What needs to be done?',
        todo_description: 'Add a description...'
      },
      labels: {
        priority: 'Priority',
        due_date: 'Due Date',
        assignee: 'Assignee',
        category: 'Category'
      },
      priorities: {
        high: 'High',
        medium: 'Medium',
        low: 'Low'
      },
      categories: {
        work: 'Work',
        personal: 'Personal',
        shopping: 'Shopping',
        others: 'Others'
      },
      confirmations: {
        delete: 'Are you sure you want to delete this todo?',
        complete: 'Mark this todo as complete?'
      },
      dates: {
        today: 'Today',
        tomorrow: 'Tomorrow',
        yesterday: 'Yesterday',
        days_ago: '{{count}} days ago',
        days_left: '{{count}} days left'
      }
    }
  },
  fr: {
    translation: {
      title: 'Liste de tâches',
      user: 'Utilisateur',
      filters: {
        all: 'Toutes',
        active: 'Actives',
        completed: 'Terminées'
      },
      status: {
        in_progress: 'En cours',
        completed: 'Terminée',
        pending: 'En attente',
        cancelled: 'Annulée'
      },
      buttons: {
        more_options: "Plus d'options",
        toggle_theme: 'Changer le thème',
        add_todo: 'Ajouter une tâche',
        save: 'Enregistrer',
        cancel: 'Annuler',
        delete: 'Supprimer'
      },
      messages: {
        count: '{{count}} message',
        count_plural: '{{count}} messages',
        no_messages: 'Aucun message',
        added: 'Tâche ajoutée avec succès',
        updated: 'Tâche mise à jour avec succès',
        deleted: 'Tâche supprimée avec succès'
      },
      errors: {
        loading: 'Erreur lors du chargement des tâches',
        adding: "Erreur lors de l'ajout de la tâche",
        updating: 'Erreur lors de la mise à jour de la tâche',
        deleting: 'Erreur lors de la suppression de la tâche',
        general: 'Une erreur est survenue'
      },
      placeholders: {
        search: 'Rechercher des tâches...',
        todo_title: 'Que faut-il faire ?',
        todo_description: 'Ajouter une description...'
      },
      labels: {
        priority: 'Priorité',
        due_date: "Date d'échéance",
        assignee: 'Assigné à',
        category: 'Catégorie'
      },
      priorities: {
        high: 'Haute',
        medium: 'Moyenne',
        low: 'Basse'
      },
      categories: {
        work: 'Travail',
        personal: 'Personnel',
        shopping: 'Achats',
        others: 'Autres'
      },
      confirmations: {
        delete: 'Êtes-vous sûr de vouloir supprimer cette tâche ?',
        complete: 'Marquer cette tâche comme terminée ?'
      },
      dates: {
        today: "Aujourd'hui",
        tomorrow: 'Demain',
        yesterday: 'Hier',
        days_ago: 'Il y a {{count}} jour',
        days_ago_plural: 'Il y a {{count}} jours',
        days_left: "Plus qu'{{count}} jour",
        days_left_plural: 'Plus que {{count}} jours'
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },
  react: {
    useSuspense: true
  }
});

export default i18n;
