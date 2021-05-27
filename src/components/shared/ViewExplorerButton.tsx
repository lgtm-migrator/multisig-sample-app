import React from 'react'

interface Interface {
  address: string
}

const ViewExplorerButton: React.FC<Interface> = ({ address }) => {
  return (
    <a
      href={`http://explorer.testnet.rsk.co/address/${address.toLowerCase()}`}
      target="_blank"
      rel="noreferrer"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fillRule="evenodd"><path d="M0 0H16V16H0z"></path><path className="icon-color" fillRule="nonzero" d="M13 13v-2c0-.552.448-1 1-1s1 .448 1 1v2c0 1.105-.895 2-2 2H3c-1.105 0-2-.895-2-2V3c0-1.105.895-2 2-2h2c.552 0 1 .448 1 1s-.448 1-1 1H3v10h10z"></path><path className="icon-color" d="M11.586 3H9c-.552 0-1-.448-1-1s.448-1 1-1h5c.276 0 .526.112.707.293.181.18.293.43.293.707v5c0 .552-.448 1-1 1s-1-.448-1-1V4.414l-6.243 6.243c-.39.39-1.023.39-1.414 0-.39-.39-.39-1.024 0-1.414L11.586 3z"></path></g></svg>
    </a>
  )
}

export default ViewExplorerButton
