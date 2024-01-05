'use client';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Button from '@/app/components/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { error } from 'console';
import { set } from 'sanity';

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const Inquiry = () => {
  const [isSending, setIsSending] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setIsSending(true);
      // implement send email here
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setIsSending(false);
        console.log('Email sent:', result);
        toast.success('Email sent!');
        reset();
      } else {
        setIsSending(false);
        console.error('Email failed to send:', result);
        toast.error('Email failed to send');
      }
    } catch (error) {
      setIsSending(false);
      toast.error('Network error');
    }
  };

  return (
    <>
      <main className='p-8'>
        <p
          className={`${
            isSending ? 'block' : 'hidden'
          } fixed z-10 top-1/2 font-bold left-1/2 -translate-x-1/2 -translate-y-1/2`}
        >
          Sending...
        </p>
        <p className='max-w-[600px] mx-auto mb-4'>
          Use this form to get in touch!
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col gap-8 bg-white rounded shadow p-8 max-w-[600px] mx-auto'
        >
          {/* Name */}
          <div className={'flex gap-4'}>
            <div className='flex flex-col flex-1'>
              <Label htmlFor='firstName'>First Name</Label>
              <input
                {...register('firstName', {
                  required: 'Please enter a first name',
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: 'Please only use letters',
                  },
                })}
                className='border rounded p-3 bg-blue-50/50 hover:border-main w-full'
              />
              {errors['firstName'] && (
                <span className='text-xs text-red-500 mt-1'>
                  {errors['firstName']?.message as string}
                </span>
              )}
            </div>
            <div className='flex flex-col flex-1'>
              <Label htmlFor='lastName'>Last Name</Label>
              <input
                {...register('lastName', {
                  required: 'Please enter a last name',
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: 'Please only use letters',
                  },
                })}
                className='border rounded p-3 bg-blue-50/50 hover:border-main w-full'
              />
              {errors['lastName'] && (
                <span className='text-xs text-red-500 mt-1'>
                  {errors['lastName'].message}
                </span>
              )}
            </div>
          </div>
          {/* Email and Phone Number */}
          <div className={'flex gap-4'}>
            <div className='flex flex-col flex-1'>
              <Label htmlFor='email'>Email</Label>
              <input
                {...register('email', {
                  required: 'Please enter an email address',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Please enter a valid email address',
                  },
                })}
                className='border rounded p-3 bg-blue-50/50 hover:border-main w-full'
              />
              {errors['email'] && (
                <span className='text-xs text-red-500 mt-1'>
                  {errors['email'].message}
                </span>
              )}
            </div>
            <div className='flex flex-col flex-1'>
              <Label htmlFor='phoneNumber'>Phone Number</Label>
              <input
                {...register('phoneNumber', {
                  required: 'Please enter a phone number',
                  pattern: {
                    value: /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/i,
                    message: 'Please enter a valid phone number',
                  },
                })}
                className='border rounded p-3 bg-blue-50/50 hover:border-main w-full'
              />
              {errors['phoneNumber'] && (
                <span className='text-xs text-red-500 mt-1'>
                  {errors['phoneNumber'].message}
                </span>
              )}
            </div>
          </div>
          {/* Message */}
          <div className='flex flex-col flex-1'>
            <Label htmlFor='message'>Message</Label>
            <textarea
              {...register('message')}
              className='border rounded p-3 bg-blue-50/50 hover:border-main w-full'
              rows={4}
            ></textarea>
          </div>
          <Button className='ml-auto' icon={faPaperPlane}>
            <input type='submit' value={'Send'} className='cursor-pointer' />
          </Button>
        </form>
        <ToastContainer />
      </main>
    </>
  );
};
export default Inquiry;

const Label = ({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor: string;
}) => {
  return <label className='text-sm mb-1 text-gray-600/90'>{children}</label>;
};
