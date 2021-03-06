/* import React, { Component, Fragment } from 'react';
import { ToastContainer, toast } from 'mdbreact';

class NotificationsPage extends Component {
  notify(type){
  return () => {
    switch (type) {
      case 'info':
        toast.info('Info message', {
          autoClose: 3000
        });
        break;
      case 'success':
        toast.success('Success message', {
          position: "top-right",
        });
        break;
      case 'warning':
        toast.warn('Warning message');
        break;
      case 'error':
        toast.error('Error message');
        break;
    }
  };
};
  render(){
    return (
      <Fragment>
        <button className='btn btn-info' onClick={this.notify('info')}>Info</button>
        <button className='btn btn-success' onClick={this.notify('success')}>Success</button>
        <button className='btn btn-warning' onClick={this.notify('warning')}>Warning</button>
        <button className='btn btn-danger' onClick={this.notify('error')}>Error</button>
        <ToastContainer
          hideProgressBar={true}
          newestOnTop={true}
          autoClose={5000}
        />
      </Fragment>
    );
  }
}
export default NotificationsPage; */