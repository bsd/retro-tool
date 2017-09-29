type Action<type extends string, data> = {
  type: type;
} & data;

type ActionError<type extends string> = {
  type: type;
  message: string;
};

type ActionCreator<action extends Action<any, any>> = (content: Omit<action, 'type'>) => action;

interface Reducer<state, data> {
  (state: state, action: Action<any, data>): Partial<state>;
}

type ErrorResponse = Action<any, {
  message: string,
}>;

interface Dispatch {
  (action: Action<any, any>): void
}

interface SingleRequest<type> {
  (dispatch: Dispatch): (data: type) => firebase.Thenable<void>;
}

interface MultiRequest<type> {
  (dispatch: Dispatch): (data: type[]) => firebase.Thenable<void>;
}
