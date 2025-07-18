import { useState, useEffect } from 'react';
import { Person } from '../types';
import { fetchPeopleData } from '../services/api';
import { AUTO_REFRESH_INTERVAL } from '../constants';

export const usePeopleData = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchData = async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }
      setError(null);
      
      const data = await fetchPeopleData();
      setPeople(data);
      setLastUpdated(new Date());
    } catch (err: any) {
      console.error('Fetch error:', err.message);
      setError('Error: ' + err.message);
    } finally {
      if (isRefresh) {
        setRefreshing(false);
      } else {
        setLoading(false);
      }
    }
  };

  const onRefresh = () => {
    fetchData(true);
  };

  useEffect(() => {
    // Initial fetch
    fetchData();
    
    // Set up auto-refresh interval
    const interval = setInterval(() => fetchData(), AUTO_REFRESH_INTERVAL);
    
    return () => clearInterval(interval);
  }, []);

  return {
    people,
    loading,
    refreshing,
    error,
    lastUpdated,
    onRefresh,
    fetchData,
  };
};
