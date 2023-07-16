const Contact = () => {
  return <div>
    <h1>Say Hi</h1>
    <div>
      <p>My links</p>
      <a href="/">Github</a>
      <a href="/">Email</a>
      <a href="/">Spotify</a>
      <a href="/">dev.com</a>
    </div>

    <form>
      <label>
        Your name
        <input type="text" />
      </label>
      <label>
        Your email
        <input type="email" />
      </label>
      <label>
        Your Message
        <input type="text" />
      </label>
      <button type="submit">Submit</button>
    </form>
  </div>
}

export default Contact;