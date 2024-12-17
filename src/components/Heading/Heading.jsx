const Heading = ({ children }) => {
  return (
    <div>
      {children}
      <svg
        width="66"
        height="6"
        viewBox="0 0 66 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 4L3.55914 2.90488C5.47538 2.31527 7.52462 2.31527 9.44086 2.90488L10.0591 3.09512C11.9754 3.68473 14.0246 3.68473 15.9409 3.09512L16.5591 2.90488C18.4754 2.31527 20.5246 2.31527 22.4409 2.90488L23.0591 3.09512C24.9754 3.68473 27.0246 3.68473 28.9409 3.09512L29.5591 2.90488C31.4754 2.31527 33.5246 2.31527 35.4409 2.90488L36.0591 3.09512C37.9754 3.68473 40.0246 3.68473 41.9409 3.09512L42.5591 2.90488C44.4754 2.31527 46.5246 2.31527 48.4409 2.90488L49.0591 3.09512C50.9754 3.68473 53.0246 3.68473 54.9409 3.09512L55.5591 2.90488C57.4754 2.31527 59.5246 2.31527 61.4409 2.90488L65 4"
          stroke="var(--color-accent)"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}

export default Heading;
