import type { MenuItem } from '../services/menu/menuService';
import * as LucideIcons from 'lucide-react';
import { createElement } from 'react';

export interface MenuNode extends MenuItem {
  children?: MenuNode[];
}

/**
 * Converts a flat array of DB menu items into a nested tree structure.
 */
export function buildMenuTree(items: MenuItem[]): MenuNode[] {
  const itemMap = new Map<number, MenuNode>();
  const tree: MenuNode[] = [];

  items.forEach(item => {
    itemMap.set(item.id, { ...item, children: [] });
  });

  items.forEach(item => {
    const node = itemMap.get(item.id);
    if (node) {
      if (item.parent_id === null) {
        tree.push(node);
      } else {
        const parent = itemMap.get(item.parent_id);
        if (parent) {
          parent.children?.push(node);
        }
      }
    }
  });

  return tree.sort((a, b) => a.sort_order - b.sort_order);
}

/**
 * Dynamically resolves a lucide-react icon by string name.
 */
export function renderIcon(iconName: string, size = 18, className = '') {
  // @ts-expect-error - indexing lucide icons dynamically
  const IconComponent = LucideIcons[iconName] || LucideIcons.Circle;
  return createElement(IconComponent, { size, className });
}
