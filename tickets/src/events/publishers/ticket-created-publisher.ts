import { Publisher, Subjects, TicketCreatedEvent } from '@the-tickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
