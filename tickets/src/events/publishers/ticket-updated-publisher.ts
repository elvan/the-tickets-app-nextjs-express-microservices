import { Publisher, Subjects, TicketUpdatedEvent } from '@the-tickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
