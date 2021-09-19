import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function favoriteToast(isFavorite) {
  if (!isFavorite) {
    toast.success('Card selected as favorite successfully!', {
      draggable: true,
      position: toast.POSITION.TOP_RIGHT,
    });
  } else {
    toast.success('Card removed from favorite successfully!', {
      draggable: true,
      position: toast.POSITION.TOP_RIGHT,
    });
  }
}

export default favoriteToast;
