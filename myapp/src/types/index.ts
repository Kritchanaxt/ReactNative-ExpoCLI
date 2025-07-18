export interface Person {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  university: string;
  skills: string[];
  profileImage?: string;
  profile?: string;
}

export interface NameCardProps {
  person: Person;
  cardStyle: object;
}

export interface AppState {
  people: Person[];
  loading: boolean;
  refreshing: boolean;
  error: string | null;
  lastUpdated: Date | null;
}
