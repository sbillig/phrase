import React, { useState } from 'react'
import { ethers } from 'ethers'
import {
  Button
} from 'reactstrap'

import PlaqueForm from './PlaqueForm'
import Publisher from './Publisher'
import IpfsUploader from '../IpfsUploader'

// TODO: might be worth taking a look at other reduction patterns.
export default function CreatePhrase () {
  const [status, setStatus] = useState('SELECTING_FORMAT')
  // SELECTING_FORMAT
  // ENTERING_VALUES,
  // WAITING_TO_UPLOAD,
  // UPLOAD_FAILED,
  // WAITING_TO_PUBLISH,
  // PUBLISH_FAILED
  // Complete
  const [format, setFormat] = useState(null)
  const [files, setFiles] = useState(null)
  const [path, setPath] = useState(null)
  const [receipt, setReceipt] = useState(null)

  if (status === 'SELECTING_FORMAT') {
    return (
      <Button onClick={() => {
        setStatus('ENTERING_VALUES')
        setFormat('ipfs-plaque-2019')
      }} >
        Plaque
      </Button>
    )
  } else if (status === 'ENTERING_VALUES') {
    return (
      <PlaqueForm onReady={ (_files) => {
        setFiles(_files)
        setStatus('WAITING_TO_UPLOAD')
      }}/>
    )
  } else if (status === 'WAITING_TO_UPLOAD') {
    return (
      <IpfsUploader
        files={files}
        onComplete={(_path) => {
          setPath(_path)
          setStatus('WAITING_TO_PUBLISH')
        }}
      />
    )
  } else if (status === 'WAITING_TO_PUBLISH') {
    return (
      <Publisher
        format={format}
        content={`/ipfs/${path}`}
        beneficiary={ethers.constants.AddressZero}
        onComplete={(receipt) => {
          setReceipt(receipt)
          setStatus('COMPLETE')
        }}
      />
    )
  }

  console.log('transaction receipt', receipt)
  return <p>Your phrase has been published!</p>
}
