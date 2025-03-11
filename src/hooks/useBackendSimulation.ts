
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

export const useBackendSimulation = <T, R>(
  apiFunction: (data: T) => Promise<R>,
  successMessage: string
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const executeRequest = async (data: T): Promise<R | null> => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      const result = await apiFunction(data);
      
      toast({
        title: 'Success',
        description: successMessage,
        duration: 5000,
      });
      
      setIsSuccess(true);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      
      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
        duration: 5000,
      });
      
      setError(errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isSuccess,
    error,
    executeRequest,
  };
};
