import React from 'react';

export interface Category {
  title: string;
  icon: React.ReactElement;
}

export interface Service {
  name: string;
  contact: string;
  lat: number;
  lng: number;
  category: string;
  phone: number;
  address: string;
  id: string;
}
