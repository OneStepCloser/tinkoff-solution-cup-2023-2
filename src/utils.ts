import { format } from 'date-fns';

export function formatDate(dateTimeString: string) {
    return format(new Date(dateTimeString), 'dd.MM.yyyy');
}