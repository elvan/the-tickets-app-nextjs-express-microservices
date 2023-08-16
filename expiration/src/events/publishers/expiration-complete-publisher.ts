import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from '@the-tickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
