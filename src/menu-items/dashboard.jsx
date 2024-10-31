// assets
import {
  DashboardOutlined,
  MessageOutlined,
  FileOutlined,
  FolderOutlined,
  BarChartOutlined,
  SettingOutlined,
  UserOutlined,
  PlusCircleOutlined
} from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  MessageOutlined,
  FileOutlined,
  FolderOutlined,
  BarChartOutlined,
  SettingOutlined,
  UserOutlined,
  PlusCircleOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    }
  ]
};

const messages = {
  id: 'group-messages',
  type: 'group',
  children: [
    {
      id: 'messages',
      type: 'item',
      url: '/messages/default',
      icon: icons.MessageOutlined,
      breadcrumbs: false
    }
  ]
};

const documents = {
  id: 'group-documents',
  type: 'group',
  children: [
    {
      id: 'documents',
      type: 'item',
      url: '/documents/default',
      icon: icons.FileOutlined,
      breadcrumbs: false
    }
  ]
};

const projects = {
  id: 'group-projects',
  type: 'group',
  children: [
    {
      id: 'projects',
      type: 'item',
      url: '/projects/default',
      icon: icons.FolderOutlined,
      breadcrumbs: false
    }
  ]
};

const analytics = {
  id: 'group-analytics',
  type: 'group',
  children: [
    {
      id: 'analytics',
      type: 'item',
      url: '/analytics/default',
      icon: icons.BarChartOutlined,
      breadcrumbs: false
    }
  ]
};

const teamMember1 = {
  id: 'team-member-1',
  type: 'group',
  children: [
    {
      id: 'member-1',
      type: 'item',
      url: '/team/member1',
      icon: icons.UserOutlined,
      breadcrumbs: false
    }
  ]
};

const teamMember2 = {
  id: 'team-member-2',
  type: 'group',
  children: [
    {
      id: 'member-2',
      type: 'item',
      url: '/team/member2',
      icon: icons.UserOutlined,
      breadcrumbs: false
    }
  ]
};

const addTeamMember = {
  id: 'add-team-member',
  type: 'group',
  children: [
    {
      id: 'add-member',
      type: 'item',
      url: '/team/add',
      icon: icons.PlusCircleOutlined,
      breadcrumbs: false
    }
  ]
};

const settings = {
  id: 'group-settings',
  type: 'group',
  children: [
    {
      id: 'settings',
      type: 'item',
      url: '/settings/default',
      icon: icons.SettingOutlined,
      breadcrumbs: false
    }
  ]
};

const profile = {
  id: 'group-profile',
  type: 'group',
  children: [
    {
      id: 'profile',
      type: 'item',
      url: '/profile/default',
      icon: icons.UserOutlined,
      breadcrumbs: false
    }
  ]
};

export { dashboard, messages, documents, projects, teamMember1, teamMember2, addTeamMember, analytics, settings, profile };
