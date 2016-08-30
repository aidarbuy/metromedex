import Checkbox from 'material-ui/Checkbox';
import * as Colors from 'material-ui/styles/colors';
import Helmet from 'react-helmet';
import React from 'react';
import ListItemDivider from '../components/ui/ListItemDivider';
import { 
	List, 
	ListItem, 
	Paper 
} from 'material-ui';

const html = 'I declare:<br/>• That the information given on this form whether input by myself, input on my behalf by a third party or automatically pre-populated is complete and correct to the best of my knowledge and belief.<br/>• The photograph submitted with this form is a true likeness of me.<br/>• The documents supplied with this application are genuine and the statements I have made with this application are truthful.<br/><br/>I understand:<br/>• I must inform the UK diplomatic mission if there is a material change to my circumstances, or any new information to my application becomes available.<br/>• The Home Office (or a trusted third party) may make reasonable checks to confirm the accuracy and authenticity of evidence I have provided and documents I have submitted with this application. <br/>• The Home Office (or a trusted third party) may also make reasonable checks on any sponsors to my application to verify statements contained in the application and establish that I will comply with or have complied with the terms of any visa granted.<br/>• All information provided by me will be processed by the Home Office in accordance with the Data Protection Act (DPA) 1998.<br/>• The Home Office is the data controller in relation to the information provided by me in this application form.<br/>• The information I provide, including biometric data, will be treated in confidence, but it may be disclosed to other government departments, agencies, local authorities, foreign governments, and other bodies, to enable the Home Office or those bodies to perform their functions. <br/>• Providing biometric information as part of an application is confirmation of consent to having biometric information checked at the UK border to verify identity. <br/>• Any disclosures will be in accordance with the DPA 1998<br/>• The information provided by me may be also used for staff training purposes.<br/>• UK entry clearance applications may be handled by British missions in other locations, including outside of the country in which I have applied and that this may involve the transfer of my application and supporting documents to and from another mission. The Home Office will be responsible for transferring my application and supporting documents safely. In these circumstances my application will still be handled in line with Home Office published customer service standards.<br/>• The fee payable is for an application processing and entry clearance decision-making service, not the guaranteed delivery of a visa, therefore I will not be entitled to a refund should my application for entry to the UK or Commonwealth and Overseas Territories be refused or granted for a shorter period than I applied for.<br/>• My visa application fee will be refunded only if the application is withdrawn in writing within 3 months and 7 days of the original date of application and prior to the submission of biometric data or any processing taking place<br/>• The information provided by me, or information made available to the Home Office during the processing of my application, may be shared with my sponsor(s) or any person(s) acting on their behalf or any applicant linked to my application (for example to my spouse/partner if we apply for visas for a trip together) for the sole purpose of considering my application. I am aware that if there is any information I do not want the Home Office to disclose I will tell you by enclosing a letter with my supporting documentation. If such requests prevent you from making legitimate inquires, my application may be refused.<br/>• My application will be automatically refused and I may be banned from going to the UK for 10 years if I use a false document, lie or withhold relevant information. I may also be banned if I have breached immigration laws in the UK. Should I use a false document, lie or withhold relevant information my details may be passed to law enforcement agencies.<br/>• I may be required to provide a record of my fingerprints and a photograph of my face (“biometric data”) as part of my application. If I refuse to do so, my application may be treated as invalid and, if so will not be considered further. (see Statutory Instrument 2006 No 1743 – The immigration (Provision of Physical Data) regulations 2006, Regulation 7(1)).<br/>• I understand that providing biometric information as part of an application is confirmation of consent to having biometric information checked at the UK border to verify identity.<br/>• I do not have recourse to public funds during my stay in the UK.<br/>• I am not entitled to receive treatment free of charge on the National Health Service (NHS), unless an exemption from charge applies in law, and therefore may be billed for any NHS treatment undertaken in the UK.<br/>• If I fail to pay NHS debts incurred by me this could adversely affect future entry clearance or leave to remain applications I make.<br/>• I am not entitled to receive state-funded education whilst in the UK.<br/>• My details may, in certain circumstances, be passed to fraud prevention agencies to prevent and detect fraud and money laundering. I also understand that such agencies may provide the Home Office with information about me. Further details explaining when information may be passed to or from fraud prevention agencies and how that information may be used can be obtained via the visas and immigration pages on the gov.uk website.<br/>• It is an offence under the Immigration Act 1971 (as amended) to make a statement which I know to be false, or not believe to be true, in order to obtain a visa/entry clearance to the UK<br/><br/>I confirm:<br/>• that, where I have a sponsor, I have informed my sponsor of the information set out below and my sponsor has confirmed that they consent to me providing the information about them which is set out in this application.<br/>• That, I understand and agree with the above declarations and hereby apply for a visa/entry clearance to the United Kingdom. <br/><br/>Information for sponsors <br/><br/>Personal information which is provided about a person acting in support of an application, including any documentary evidence provided by or about them, will be processed in accordance with the Data Protection Act 1998 by the Home Office, which is the data controller in relation to the information provided. <br/>The Home Office will use this information to make decisions about the application and to prevent and detect fraud. We may share this information with other government departments or agencies, local and public authorities, foreign governments, companies (including financial and utility companies), employers or other bodies in order to make reasonable checks to verify the information provided in the application and confirm that sponsors have or will comply with the terms of any visa which may be or have been granted. Any information received by the Home Office about a sponsor may be used in reaching a decision on the application. Full details of the way in which the data may be processed can be found on the visas and immigration pages on the gov.uk website at http://www.gov.uk';

const docs = {
	0: {
		name: "Подтверждение",
		desc: "Распечатанная копия подтверждения на собеседование",
	},
	1: {
		name: "Визовый сбор",
		desc: "Распечатанная квитанция об оплате, email confirmation and https://www.visa4uk.fco.gov.uk/Finalise/CompleteApplication",
	},
	3: {
		name: "Оригиналы документов",
		desc: "Оригинальные экземпляры всех документов, указанных в анкете",
	},
	4: {
		name: "Анкета",
		desc: "Заполненная и подписанная анкета в распечатанном виде",
	},
	5: {
		name: "Паспорт",
		desc: "Действующий паспорт со свободной страницей для визы",
	},
	6: {
		name: "Справка",
		desc: "Справка со школы",
	},
	7: {
		name: "Другие документы",
		desc: "Другие документы, которые посчитаете нужным отдать на рассмотрение",
	},
	8: {
		name: "Перевод документов",
		desc: "Для документов не на английском надо предоставить полный перевод. Каждый перевод с подписью переводчика с подтверждением, что он аккуратно отражает оригинальные документы. Подтверждение должно быть датировано в формате ДД/ММ/ГГГГ и включать в себя полное имя и контактные данные переводчика.",
	},
};

class Visa extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const docsNodes = Object.keys(docs).map((key, index, arr)=> {
			return (
				<ListItem key={key} leftCheckbox={<Checkbox />}>
					<div style={{fontSize:18,color:Colors.cyan700}}>
						{docs[key].name}
					</div>

					<div style={{marginTop:10, fontSize:16, lineHeight:1.6}}>
						{docs[key].desc}
					</div>

					<ListItemDivider index={index} length={arr.length}
						style={{
							transform:'translateY(16px)',
							background:Colors.blueGrey500,
							width:'100%',
						}}
					/>

				</ListItem>
			);
		});
		return (
			<section>
				<Helmet title="Visa Info" />

		  	<h3>Документы в визовый центр:</h3>

		  	<List>
		  		{docsNodes}
		  	</List>

		  	<Paper style={{margin:70, padding:'20px', marginTop:50}}>
			  	<em>Вы сами должны для себя определить, какие документы лучше удовлетворяют требованиям иммиграционного законодательства.</em>
		  	</Paper>
		  </section>
	  );
	}
}

export default Visa;