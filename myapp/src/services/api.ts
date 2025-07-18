import { Person } from '../types';

const API_URL = 'https://raw.githubusercontent.com/Kritchanaxt/kritchanat_json/refs/heads/main/kritchanat_name_card.json';

export const fetchPeopleData = async (): Promise<Person[]> => {
  const response = await fetch(API_URL);
  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  
  const data = await response.json();
  
  // Validate and clean the data
  const validatedData = data.filter((person: any) => 
    person.name && 
    person.title && 
    person.email && 
    person.phone && 
    person.location && 
    person.university && 
    Array.isArray(person.skills)
  );
  
  return validatedData;
};
