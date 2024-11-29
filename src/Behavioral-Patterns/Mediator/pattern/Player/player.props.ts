import ConcreteMediator from '../concrete-mediator';

export default interface PlayerProps {
    name: string;
    mediator: ConcreteMediator;
}