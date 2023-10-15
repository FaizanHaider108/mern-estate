import React from 'react';

const MapComponent = () => {
  return (
    <div className="w-full h-96"> {/* You can adjust the width and height based on your requirements */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d70913.9073170729!2d74.16552973848678!3d31.445238257592468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919012dc382304b%3A0x48b03e43912f0877!2sNext%20Land%20Estate%20%26%20Buliders!5e0!3m2!1sen!2s!4v1697221297233!5m2!1sen!2s"
        width="100%"
        height="100%"
        title="Google Map"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;
