import React from 'react';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'Bowl' | 'Toast' | 'Smoothie';
}

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}