import React from 'react'

import RadioGroup from '../../../src/components/RadioGroup'


const options = [
  {
    name: 'Prédio',
    value: 'predio',
  },
  {
    name: 'Casa',
    value: 'casa',
  },
  {
    name: 'Sofá',
    value: 'sofa',
  },
]

class RadioGroupState extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: 'casa' }
  }

  componentWillMount () {
    if (this.props.success) {
      this.setState({ value: 'sofa' })
    }
  }

  render () {
    const {
      disabled,
      error,
      name,
      success,
    } = this.props

    const {
      value,
    } = this.state

    return (
      <div>
        <RadioGroup
          options={options}
          name={name}
          onChange={v => this.setState({ value: v })}
          value={value}
          disabled={disabled}
          error={error}
          success={success}
        />

        <pre>Selecionado: {value}</pre>
      </div>
    )
  }
}

RadioGroupState.defaultProps = {
  disabled: false,
  error: '',
  success: '',
}

const RadioGroupStateExamples = () => (
  <div>
    <h2>Radio Button Group</h2>

    <section>
      <h3>Disabled</h3>
      <RadioGroupState name="disabled" disabled />
    </section>

    <section>
      <h3>Default</h3>
      <RadioGroupState name="default" />
    </section>

    <section>
      <h3>Success</h3>
      <RadioGroupState name="success" success="Sucesso!" />
    </section>

    <section>
      <h3>Error</h3>
      <RadioGroupState name="error" error="Erro!" />
    </section>
  </div>
)

export default RadioGroupStateExamples
