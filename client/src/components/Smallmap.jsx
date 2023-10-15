import React from 'react';

const SmallMap = () => {
  return (
    <div className="w-[100%]"> {/* You can adjust the width and height based on your requirements */ }
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d108933.68583672479!2d74.260794!3d31.436775!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919012dc382304b%3A0x48b03e43912f0877!2sNext%20Land%20Estate%20%26%20Builders!5e0!3m2!1sen!2sus!4v1697404275852!5m2!1sen!2sus"
        width="130"
        height="130"
        style={ { border: '0' } }
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default SmallMap;
