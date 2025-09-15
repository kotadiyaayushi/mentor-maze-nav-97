import { createContext, useContext, ReactNode, useState } from 'react';

interface College {
  id: string;
  name: string;
  code: string;
  logo?: string;
  theme: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'admin';
  college: College;
}

interface CollegeContextType {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  colleges: College[];
}

const CollegeContext = createContext<CollegeContextType | undefined>(undefined);

const colleges: College[] = [
  { id: 'stanford', name: 'Stanford University', code: 'STAN', theme: 'cardinal' },
  { id: 'mit', name: 'MIT - Massachusetts Institute of Technology', code: 'MIT', theme: 'tech' },
  { id: 'harvard', name: 'Harvard University', code: 'HARV', theme: 'crimson' },
  { id: 'berkeley', name: 'UC Berkeley', code: 'UCB', theme: 'blue' },
  { id: 'oxford', name: 'Oxford University', code: 'OXF', theme: 'navy' },
  { id: 'cambridge', name: 'Cambridge University', code: 'CAM', theme: 'light-blue' }
];

export const CollegeProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  return (
    <CollegeContext.Provider value={{ currentUser, setCurrentUser, colleges }}>
      {children}
    </CollegeContext.Provider>
  );
};

export const useCollege = () => {
  const context = useContext(CollegeContext);
  if (context === undefined) {
    throw new Error('useCollege must be used within a CollegeProvider');
  }
  return context;
};