function Maps() {
  return (
    // write map code here
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.363318144309!2d31.225904315433!3d30.044420181877143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145849f8d4f9c3d3%3A0x1c4f9f6c4b7b4c7a!2sNile%20University!5e0!3m2!1sen!2seg!4v1630821140673!5m2!1sen!2seg"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Maps;
