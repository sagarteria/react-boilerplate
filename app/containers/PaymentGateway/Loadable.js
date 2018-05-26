/**
 *
 * Asynchronously loads the component for PaymentGateway
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
