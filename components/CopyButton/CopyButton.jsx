import React from 'react'
import Styles from '../../styles/CopyButton.module.css'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

export const CopyButton = ({ children, onClick }) => {
  return (
    <>
      <button
				onClick={() => navigator.clipboard.writeText('salinaspaul.dev@gmail.com')}
				className={Styles.CopyButton}
				id='copyButton'
				data-tooltip-content='Copiado!'
				data-tooltip-events={['click']}
      >
        {children}
      </button>
      <ReactTooltip
				anchorId='copyButton'
				place='top'
				delayHide={1500}
				style={{ transition: '0.3s' }}
      />
    </>
  )
}
