namespace Shinetech.Foundation.Domain.Models.Core
{
    public interface IAggregateRoot : IEntity
    {
        IReadOnlyCollection<IEvent> DomainEvents { get; }
        void RaiseDomainEvent(IEvent @event);
        void ClearDomainEvents();
    }
}