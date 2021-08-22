import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { ChangeEvent, useCallback, useRef, useState } from 'react';

import { useHistory, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import Header from '../../../../components/Header';
import SmallButton from '../../../../components/SmallButton';
import Input from '../../../../components/Input';

import {
  Container,
  Content,
  Title,
  InputContainer,
  FormInput,
  ButtonContainer,
} from './styles';
import Checkbox from '../../../../components/Checkbox';
import Select from '../../../../components/Select';
import api from '../../../../services/api';
import getValidationErrors from '../../../../utils/getValidateErrors';
import Back from '../../../../components/Back';

interface newApartmentFormData {
  hotel_id: string;
  room_number: string;
  description: string;
  price: number;
  suite: boolean;
  tv: boolean;
  air_conditioning: boolean;
  room_type: string;
}

interface HotelParams {
  hotel_id: string;
}

const NewApartment: React.FC = () => {
  const params = useParams<HotelParams>();
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const [selectedType, setSelectedType] = useState('');
  const [suite, setSuite] = useState(true);
  const [tv, setTV] = useState(true);
  const [airConditioning, setAirConditioning] = useState(true);

  function handleSelectedType(event: ChangeEvent<HTMLSelectElement>) {
    const type = event.target.value;

    setSelectedType(type);
  }

  function handleSelectSuite() {
    setSuite(!suite);
  }

  function handleSelectTV() {
    setTV(!tv);
  }

  function handleSelectAirConditioning() {
    setAirConditioning(!airConditioning);
  }

  const messageSuccess = useCallback(() => {
    Swal.fire('Mensagem', 'Hotel cadastrado com sucesso', 'success');
  }, []);

  const handleSubmit = useCallback(
    async (data: newApartmentFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          room_number: Yup.string().required(
            'Número do apartamento é obrigatório',
          ),
          description: Yup.string().required(
            'Descrição do apartamento é obrigatório',
          ),
          price: Yup.string().required('Preço do apartamento é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/apartments', {
          hotel_id: params.hotel_id,
          room_number: data.room_number,
          description: data.description,
          price: data.price,
          suite,
          tv,
          air_conditioning: airConditioning,
          room_type: selectedType,
        });

        messageSuccess();

        history.push(`/admin/apartments/${params.hotel_id}`);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        toast.error('Erro ao realizar o cadastro!');
      }
    },
    [airConditioning, history, params.hotel_id, suite, tv],
  );

  return (
    <Container>
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <Back to={`/admin/apartments/${params.hotel_id}`} />
      <Content>
        <Title>
          <p>Cadastrar apartamento</p>
          <span>Por favor preencha as informações solicitadas.</span>
        </Title>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <InputContainer>
            <FormInput>
              <p>Número do apartamento:</p>
              <Input name="room_number" type="number" />
            </FormInput>

            <FormInput>
              <p>Tipo do apartamento:</p>
              <Select
                name="room_type"
                value={selectedType}
                onChange={handleSelectedType}
                options={[
                  { value: 'Casal', label: 'Casal' },
                  { value: 'Solteiro', label: 'Solteiro' },
                  { value: 'Solteiro Duplo', label: 'Solteiro Duplo' },
                  { value: 'Solteiro Triplo', label: 'Solteiro Triplo' },
                  { value: 'Casal + Solteiro', label: 'Casal + Solteiro' },
                ]}
              />
            </FormInput>

            <FormInput>
              <p>Descrição:</p>
              <Input name="description" type="text" />
            </FormInput>

            <FormInput>
              <p>Preço:</p>
              <Input name="price" type="text" />
            </FormInput>
          </InputContainer>

          <InputContainer>
            <p>Itens:</p>
            <Checkbox name="suite" label="Suíte" onChange={handleSelectSuite} />
            <Checkbox name="tv" label="TV" onChange={handleSelectTV} />
            <Checkbox
              name="air_conditioning"
              label="Ar condicionado"
              onChange={handleSelectAirConditioning}
            />
          </InputContainer>
          <ButtonContainer>
            <SmallButton type="submit">Cadastrar apartamento</SmallButton>
          </ButtonContainer>
        </Form>
      </Content>
    </Container>
  );
};

export default NewApartment;
