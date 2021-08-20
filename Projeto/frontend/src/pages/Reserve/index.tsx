import React, { useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

import Header from '../../components/Header';

import {
  Container,
  Title,
  Content,
  DescriptionReserve,
  Legend,
  InfoHotel,
  InfoReserve,
  DateContainer,
  GeneralInfos,
} from './styles';

const Reserve: React.FC = () => {
  const [checkinDate, setCheckinDate] = useState(new Date());
  const [checkoutDate, setCheckoutDate] = useState(new Date());

  return (
    <Container>
      <Header />
      <Title>Finalizar reserva</Title>
      <Content>
        <DescriptionReserve>
          <Legend>
            <p>Informações sobre a reserva</p>
          </Legend>
          <GeneralInfos>
            <InfoHotel>
              <span>Hotel Maravilhas</span>
              <p>Rua Jardim, Bairro Liberdade, Belo Horizonte - MG</p>
              <p>Telefone: (31) 3035-1235</p>
              <p>E-mail: hotel@gmail.com</p>
            </InfoHotel>
            <InfoReserve>
              <DateContainer>
                <p>Data de check-in:</p>
                <DatePicker
                  selected={checkinDate}
                  onChange={date => setCheckinDate(checkinDate)}
                />
                <p>Data de check-out:</p>
                <DatePicker
                  selected={checkoutDate}
                  onChange={date => setCheckoutDate(checkoutDate)}
                />
              </DateContainer>
            </InfoReserve>
          </GeneralInfos>
        </DescriptionReserve>
      </Content>
    </Container>
  );
};

export default Reserve;
