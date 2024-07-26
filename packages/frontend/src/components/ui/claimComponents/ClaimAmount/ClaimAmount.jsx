import BlueButton from '../../button/BlueButton/BlueButton'
import { ClaimAmountStyle } from './style'
import AnimationY from '@/components/Animated/Bock/AnimationY/AnimationY'
import { useState } from 'react';
import useWaveEffect from '@/hooks/useWaveEffect';

function ClaimAmount({ text, dataRadioButtons, buttonName, handleClick, wallet }) {
    const [selectedRadioValue, setSelectedRadioValue] = useState(dataRadioButtons[0].value);

    const handleRadioChange = (event) => {
        setSelectedRadioValue(event.target.value);
    };

    return (
        <ClaimAmountStyle>
            <span className={'Amount'}>
                <AnimationY teg={'p'} delay={100}>{text}</AnimationY>
                {dataRadioButtons?.length
                    ? dataRadioButtons.map((_, i) => (
                        <RadioInput i={i} data={_} key={i} selectedRadioValue={selectedRadioValue} handleRadioChange={handleRadioChange}/>
                    ))
                    : null}
            </span>
            <AnimationY delay={(dataRadioButtons.length + 1) * 100 + 100}>
                <BlueButton 
                name={buttonName} 
                handleClick={handleClick} 
                disabled={wallet && wallet.length === 34 && selectedRadioValue ? false : true}
                />
            </AnimationY>
        </ClaimAmountStyle>
    )
}

function RadioInput({ i, data, selectedRadioValue, handleRadioChange }) {
    const rippleRef = useWaveEffect(+selectedRadioValue === +data.value)

    return (
        <AnimationY delay={(i + 1) * 100 + 100} tag={'label'} key={i} className={'CustomRadio'}>
            <input
                type={'radio'}
                name={'myRadio'}
                value={data.value}
                className={'RadioInput'}
                onChange={handleRadioChange}
                checked={+selectedRadioValue === +data.value}
            />
            <span ref={rippleRef} className={'RadioButton'}><p>{data.name}</p></span>
        </AnimationY>
    )
}

export default ClaimAmount
