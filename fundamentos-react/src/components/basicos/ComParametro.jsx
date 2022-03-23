import React from "react"

export default function ComParametro(props) {

    const Status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'

    return (
        <div>
            <h3>Alune: {props.alune}</h3>
            <p>Nota: {props.nota}
                <strong> [ {Status} ] </strong>
            </p>
        </div>
    )
}
