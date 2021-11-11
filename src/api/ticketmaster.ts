import { TicketmasterResponse } from 'models/ticketmaster';
import { ISearch } from 'models/contex.model';
import Api from './api';

const TicketmasterApi = async (text: string): Promise<ISearch[]> => {
  const url = `https://app.ticketmaster.com/discovery/v2/attractions?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*&keyword=${text}`;
  const data = await Api.fetch<TicketmasterResponse>(url);
  // eslint-disable-next-line no-underscore-dangle
  return data._embedded?.attractions ?? [];
};

export default TicketmasterApi;
