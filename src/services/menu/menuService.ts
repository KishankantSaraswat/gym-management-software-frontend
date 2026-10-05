// import api from '../api';

export interface MenuItem {
  id: number;
  menu_code: string;
  menu_name: string;
  parent_id: number | null;
  route: string;
  icon: string;
  sort_order: number;
  application_type: string;
  is_active: boolean;
  permissions?: Record<string, boolean>;
}

/**
 * Fetch authorized menus for the current user and application context.
 */
export async function fetchMenus(applicationType: string = 'SAAS_ADMIN'): Promise<MenuItem[]> {
  try {
    // TODO: Wire up to real endpoint when ready
    // const { data } = await api.get<{ data: MenuItem[] }>(`/menus?app=${applicationType}`);
    // return data.data;
    
    // Using parameter to satisfy TS and prepare for real API
    console.debug(`Fetching menus for app type: ${applicationType}`);
    
    // Returning mock data for now based on greenfield spec
    return mockMenus;
  } catch (error) {
    console.error('Failed to fetch menus', error);
    return [];
  }
}

const mockMenus: MenuItem[] = [
  { id: 1, menu_code: 'DASHBOARD', menu_name: 'Dashboard', parent_id: null, route: '/dashboard', icon: 'LayoutDashboard', sort_order: 1, application_type: 'SAAS_ADMIN', is_active: true },
  { id: 2, menu_code: 'MEMBERS', menu_name: 'Members', parent_id: null, route: '/members', icon: 'Users', sort_order: 2, application_type: 'SAAS_ADMIN', is_active: true },
  { id: 3, menu_code: 'BILLING', menu_name: 'Billing', parent_id: null, route: '/billing', icon: 'CreditCard', sort_order: 3, application_type: 'SAAS_ADMIN', is_active: true },
  { id: 4, menu_code: 'REPORTS', menu_name: 'Reports', parent_id: null, route: '/reports', icon: 'BarChart3', sort_order: 4, application_type: 'SAAS_ADMIN', is_active: true },
  { id: 5, menu_code: 'SETTINGS', menu_name: 'Settings', parent_id: null, route: '/settings', icon: 'Settings', sort_order: 5, application_type: 'SAAS_ADMIN', is_active: true },
];
