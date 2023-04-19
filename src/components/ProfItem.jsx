const ProfItem = ({ codeprof, nom, prenom, grade }) => {
    return (
        <>
            <h1 className="text-start p-3">{codeprof}</h1>
            <h1 className="text-start p-3">{nom}</h1>
            <h1 className="text-start p-3">{prenom}</h1>
            <h1 className="text-start p-3">{grade}</h1>
            <div className="flex flex-row gap-2 text-start p-3">
                <h1>Editer</h1>
                <h1>Supprimer</h1>
            </div>
        </>
    )
}

export default ProfItem