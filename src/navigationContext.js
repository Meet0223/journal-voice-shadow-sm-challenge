export class NavigationContextError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NavigationContextError';
  }
}

export function createNavigationContext() {
  let active = true;

  return {
    deactivate() {
      active = false;
    },
    push(route) {
      if (!active) {
        throw new NavigationContextError(
          "Couldn't find a navigation context. This usually happens after screen unmount."
        );
      }
      return route;
    },
  };
}
