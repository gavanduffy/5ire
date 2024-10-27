import useAuthStore from 'stores/useAuthStore';
import Debug from 'debug';
import { createClient } from '@supabase/supabase-js';
import { captureException } from '@sentry/electron/renderer';

const debug = Debug('5ire:vendors:supa');

const supabase = createClient(
  `https://${process.env.SUPA_PROJECT_ID}.supabase.co`,
  process.env.SUPA_KEY as string
);

export async function fetchById<Type>(
  table: string,
  id: number,
  columns: string = '*'
): Promise<Type> {
  let { data, error } = await supabase.from(table).select(columns).eq('id', id).single();
  if (error) {
    debug(error);
    captureException(error);
    throw error;
  }
  return data as Type;
}

export async function fetchMime<Type>(
  table: string,
  columns: string = '*'
): Promise<Type[]> {
  const { user } = useAuthStore.getState();
  if (!user) {
    throw Error('Your session is expired, please sign in.');
  }
  let { data, error } = await supabase
    .from(table)
    .select(columns)
    .eq('created_by', user.id);
  if (error) {
    debug(error);
    captureException(error);
    throw error;
  }
  return data as Type[];
}

export default supabase;
