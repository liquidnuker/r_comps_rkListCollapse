// wrapper
import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  resolve: () => import('./lc1-01.jsx')
});