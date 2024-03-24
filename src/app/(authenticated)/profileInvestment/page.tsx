'use client'
import React from 'react'
import { Button } from '@/app/components/ui/button';
import { Label } from '@/app/components/ui/label';
import { Form, Formik } from 'formik';
import { CardProfileInvestment } from '@/app/components/dashboard/card';

export default function ProfileInvestment() {
  const [points, setPoints] = React.useState({
    firstQuestion: 0,
    secondQuestion: 0,
    thirdQuestion: 0,
    fourthQuestion: 0,
    fifthQuestion: 0,
    sixthQuestion: 0,
    seventhQuestion: 0,
    eighthQuestion: 0,
  });
  const [result, setResult] = React.useState(0);
  

  const handleSubmit = (values: any) => {
    let resultPoints = 0;

    Object.keys(values).forEach((question) => {
      const value = values[question];
      setPoints((prevPoints) => ({
        ...prevPoints,
        [question]: value,
      }));
      resultPoints += value;
    });
    setResult(resultPoints);

  }



  return (
    <>

      <Formik
        initialValues={points}
        onSubmit={(values, actions) => {
          handleSubmit(values);
        }}
      >
        {({ setFieldValue }) => (
          <Form className='flex flex-col justify-center items-center px-8 pt-6 pb-8 mb-4'>
            {(result > 0) ? (
              <CardProfileInvestment result={result} setResult={setResult} />
            ) : (
              <>

                <h1 className='text-4xl mt-16 text-center'>Bem vindo a sua análise de perfil</h1>
                <div className='mb-4 grid grid-cols-1 sm:grid-cols-2 mt-10 gap-5 flex-wrap'>
                  <div>
                    <p className='block text-sm mb-2 font-bold'>1 - Qual o seu principal objetivo ao investir seu dinheiro?</p>
                    <div className=' mb-2 flex gap-2'>
                      <input type='radio' id='firstQuestion1' name="firstQuestion" onClick={() => setFieldValue('firstQuestion', 1)} />
                      <Label htmlFor='firstQuestion1' className=' text-sm'>Preservar meu patrimônio assumindo um menor risco</Label>
                    </div>
                    <div className='mb-2 flex gap-2'>
                      <input type='radio' id='firstQuestion2' name="firstQuestion" onClick={() => setFieldValue('firstQuestion', 2)} />
                      <Label htmlFor='firstQuestion2' className=' text-sm'>Uma combinação entre preservação do patrimônio e sua valorização</Label>
                    </div>
                    <div className='mb-2 flex gap-2'>
                      <input type='radio' id='firstQuestion3' name="firstQuestion" onClick={() => setFieldValue('firstQuestion', 3)} />
                      <Label htmlFor='firstQuestion3' className=' text-sm'>Maximizar o potencial de ganho assumindo um maior risco</Label>
                    </div>
                  </div>
                  <div>
                    <p className='block text-sm font-bold mb-2'>2 - Por quanto tempo pretende deixar seu dinheiro investido?</p>
                    <div className='mb-2 flex gap-2'>
                      <input type='radio' id='secondQuestion1' name="secondQuestion" onClick={() => setFieldValue('secondQuestion', 1)} />
                      <Label htmlFor='secondQuestion1' className=' text-sm'>Até 1 ano</Label>
                    </div>
                    <div className='mb-2 flex gap-2'>
                      <input type='radio' id='secondQuestion2' name="secondQuestion" onClick={() => setFieldValue('secondQuestion', 2)} />
                      <Label htmlFor='secondQuestion2' className=' text-sm'>1 a 5 anos</Label>
                    </div>
                    <div className='mb-2 flex gap-2'>
                      <input type='radio' id='secondQuestion3' name="secondQuestion" onClick={() => setFieldValue('secondQuestion', 3)} />
                      <Label htmlFor='secondQuestion3' className=' text-sm'>Mais de 5 anos</Label>
                    </div>
                  </div>
                  <div>
                    <p className='block text-sm font-bold mb-2'>3 - Qual é a sua necessidade em relação ao dinheiro que está investindo?</p>
                    <div className='mb-2 flex gap-2'>
                      <input type='radio' id='thirdQuestion1' name="thirdQuestion" onClick={() => setFieldValue('thirdQuestion', 1)} />
                      <Label htmlFor='thirdQuestion1' className=' text-sm'>Preciso deste dinheiro como complemento de renda</Label>
                    </div>

                    <div className='mb-2 flex gap-2'>
                      <input type='radio' id='thirdQuestion2' name="thirdQuestion" onClick={() => setFieldValue('thirdQuestion', 2)} />
                      <Label htmlFor='thirdQuestion2' className=' text-sm'>Eventualmente posso precisar utilizar uma parte dele</Label>
                    </div>

                    <div className='mb-2 flex gap-2'>
                      <input type='radio' id='thirdQuestion3' name="thirdQuestion" onClick={() => setFieldValue('thirdQuestion', 3)} />
                      <Label htmlFor='thirdQuestion3' className=' text-sm'>Não tenho necessidade imediata deste dinheiro</Label>
                    </div>
                  </div>
                  <div>
                    <p className='block text-sm font-bold mb-2'>4 - Qual percentual da sua renda você investe regularmente?</p>
                    <div className='mb-2 flex gap-2'>
                      <input type='radio' id='fourthQuestion1' name="fourthQuestion" onClick={() => setFieldValue('fourthQuestion', 1)} />
                      <Label htmlFor='fourthQuestion1' className=' text-sm'>Até 10%</Label>
                    </div>

                    <div className='mb-2 flex gap-2'>
                      <input type='radio' id='fourthQuestion2' name="fourthQuestion" onClick={() => setFieldValue('fourthQuestion', 2)} />
                      <Label htmlFor='fourthQuestion2' className=' text-sm'>De 10% a 20%</Label>
                    </div>

                    <div className='mb-2 flex gap-2'>
                      <input type='radio' id='fourthQuestion3' name="fourthQuestion" onClick={() => setFieldValue('fourthQuestion', 3)} />
                      <Label htmlFor='fourthQuestion3' className=' text-sm'>Acima de 20%</Label>
                    </div>
                  </div>

                  <div>
                    <p className='block text-sm font-bold mb-2'>5 - Por conta de oscilações do mercado, considere que seus investimentos <br /> percam 10% do valor aplicado. Neste caso, o que você faria?</p>
                    <div className='mb-2 flex gap-2'>
                      <input type='radio' id='fifthQuestion1' name="fifthQuestion" onClick={() => setFieldValue('fifthQuestion', 1)} />
                      <Label htmlFor='fifthQuestion1' className=' text-sm'>Tiraria todo o dinheiro</Label>
                    </div>

                    <div className='mb-2 flex gap-2'>
                      <input type='radio' id='fifthQuestion2' name="fifthQuestion" onClick={() => setFieldValue('fifthQuestion', 2)} />
                      <Label htmlFor='fifthQuestion2' className=' text-sm'>Manteria o dinheiro</Label>
                    </div>

                    <div className='mb-2 flex gap-2'>
                      <input type='radio' id='fifthQuestion3' name="fifthQuestion" onClick={() => setFieldValue('fifthQuestion', 3)} />
                      <Label htmlFor='fifthQuestion3' className=' text-sm'>Colocaria mais dinheiro</Label>
                    </div>

                  </div>

                  <div>
                    <p className='block text-sm font-bold mb-2'>6 - Considerando sua formação, é possível afirmar que:</p>
                    <div className='mb-2 flex gap-2'>
                      <input type='radio' id='sixthQuestion1' name="sixthQuestion" onClick={() => setFieldValue('sixthQuestion', 1)} />
                      <Label htmlFor='sixthQuestion1' className=' text-sm'>Não possuo formação relacionada ao mercado financeiro</Label>
                    </div>

                    <div className='mb-2 flex gap-2'>
                      <input type='radio' id='sixthQuestion2' name="sixthQuestion" onClick={() => setFieldValue('sixthQuestion', 2)} />
                      <Label htmlFor='sixthQuestion2' className=' text-sm'>Minha formação é pouco relacionada ao mercado financeiro</Label>
                    </div>

                    <div className='mb-2 flex gap-2'>
                      <input type='radio' id='sixthQuestion3' name="sixthQuestion" onClick={() => setFieldValue('sixthQuestion', 3)} />
                      <Label htmlFor='sixthQuestion3' className=' text-sm'>Minha formação está diretamente relacionada ao mercado financeiro</Label>
                    </div>
                  </div>

                  <div>
                    <p className='block text-sm font-bold mb-2'>7 - Considerando sua experiência profissional, é possível afirmar que:</p>
                    <div className='mb-2 flex gap-2'>
                      <input type='radio' id='seventhQuestion1' name="seventhQuestion" onClick={() => setFieldValue('seventhQuestion', 1)} />
                      <Label htmlFor='seventhQuestion1' className=' text-sm'>Não possuo experiência sobre mercado financeiro
                      </Label>
                    </div>

                    <div className='mb-2 flex gap-2'>
                      <input type='radio' id='seventhQuestion2' name="seventhQuestion" onClick={() => setFieldValue('seventhQuestion', 2)} />
                      <Label htmlFor='seventhQuestion2' className=' text-sm'>Tenho alguma experiência em mercado financeiro e preciso de orientação
                        profissional antes de investir</Label>
                    </div>

                    <div className='mb-2 flex gap-2'>
                      <input type='radio' id='seventhQuestion3' name="seventhQuestion" onClick={() => setFieldValue('seventhQuestion', 3)} />
                      <Label htmlFor='seventhQuestion3' className=' text-sm'>Tenho vasto conhecimento em mercado financeiro e me sinto seguro ao investir
                        sem orientação profissional</Label>
                    </div>


                  </div>

                  <div>
                    <p className='block text-sm font-bold mb-2'>8 - Como você descreveria sua expectativa de renda futura para os próximos 5 anos?</p>
                    <div className='mb-2 flex gap-2'>
                      <input type='radio' id='eighthQuestion1' name="eighthQuestion" onClick={() => setFieldValue('eighthQuestion', 1)} />
                      <Label htmlFor='eighthQuestion1' className=' text-sm'>Ou Minha renda deve diminuir devido à aposentadoria, mudança de emprego,
                        diminuição de faturamento, etc
                      </Label>
                    </div>

                    <div className='mb-2 flex gap-2'>
                      <input type='radio' id='eighthQuestion2' name="eighthQuestion" onClick={() => setFieldValue('eighthQuestion', 2)} />
                      <Label htmlFor='eighthQuestion2' className=' text-sm'>Minha renda deve se manter estável</Label>
                    </div>

                    <div className='mb-2 flex gap-2'>
                      <input type='radio' id='eighthQuestion3' name="eighthQuestion" onClick={() => setFieldValue('eighthQuestion', 3)} />
                      <Label htmlFor='eighthQuestion3' className=' text-sm'> Minha renda deve aumentar devido a uma promoção, novo emprego, aumento de
                        faturamento, etc</Label>
                    </div>
                  </div>

                </div>



                <div className='flex items-center justify-center mt-10'>
                  <Button
                    type="submit"
                    className="bg-customBtn hover:bg-customBtn rounded max-sm:w-60 w-96 text-white h-10"
                  >
                    Enviar
                  </Button>
                </div>

              </>

            )}


          </Form>
        )}
      </Formik>
    </>
  )
}