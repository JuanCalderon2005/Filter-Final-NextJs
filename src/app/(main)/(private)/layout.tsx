import React from 'react'
import AuthGuard from './guard/AuthGuard';
import Layout from '@/src/ui/Layouts/Dashboard/layout';
import SidebarDashboard from '@/src/ui/Organisms/home/sidebar';

export default function Privatelayout(
  { children }: { children: React.ReactNode; }
) {
  return (
    <AuthGuard>
      <Layout>
        <SidebarDashboard />
        {children}
      </Layout>
    </AuthGuard>
  )
}
