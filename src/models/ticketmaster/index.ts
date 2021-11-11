import { ISearch } from 'models/contex.model';

// api call response data type
export type TicketmasterResponse = {
  _embedded?: {
    attractions?: ISearch[];
  }
}
