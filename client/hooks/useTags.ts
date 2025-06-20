import { tags } from '@/api';
import { Tag } from '@/types';
import { useEffect, useState } from 'react';

export function useTags() {
  const [tagList, setTagList] = useState<Tag[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTags = async () => {
      setLoading(true);
      try {
        const data = await tags.getAll();
        setTagList(
          data.map((tag: any, index: number) => ({
            id: tag.id,
            name: tag.name,
            color: tag.color,
          })),
        );
      } catch (error) {
        setError('Failed to load tags');
      } finally {
        setLoading(false);
      }
    };
    fetchTags();
  }, []);
  return { tagList, loading, error };
}
