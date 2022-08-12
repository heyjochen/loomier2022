import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

import { ChevronRightIcon, DotsVerticalIcon } from '@heroicons/react/solid';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const projects = [
  {
    id: 1,
    title: 'GraphQL API',
    initials: 'GA',
    team: 'Engineering',
    members: [
      {
        name: 'Dries Vincent',
        handle: 'driesvincent',
        imageUrl:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Lindsay Walton',
        handle: 'lindsaywalton',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Courtney Henry',
        handle: 'courtneyhenry',
        imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Tom Cook',
        handle: 'tomcook',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    totalMembers: 12,
    lastUpdated: 'March 17, 2020',
    pinned: true,
    bgColorClass: 'bg-pink-600',
  },
  // More projects...
];
const pinnedProjects = projects.filter((project) => project.pinned);

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function Exposures() {
  const [exposures, setExposures] = useState([]);

  useEffect(() => {
    const allExposures = async () => {
      try {
        const exposures = await axios.get('/api/projects');
        setExposures(exposures.data);
      } catch (error) {
        console.log(error);
      }
    };
    allExposures();
  }, []);

  const deleteProject = async (id) => {
    try {
      const response = await axios.delete(`/api/projects/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* Projects list (only on smallest breakpoint) */}
      <div className="mt-10 sm:hidden">
        <div className="px-4 sm:px-6">
          <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
            Title
          </h2>
        </div>
        <ul
          role="list"
          className="mt-3 border-t border-gray-200 divide-y divide-gray-100"
        >
          {exposures.map((exposure) => (
            <li key={exposure.id}>
              <a
                href="#"
                className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6"
              >
                <span className="flex items-center truncate space-x-3">
                  <span
                    className={classNames(
                      exposure.bgColorClass,
                      'w-2.5 h-2.5 flex-shrink-0 rounded-full'
                    )}
                    aria-hidden="true"
                  />
                  <span className="font-medium truncate text-sm leading-6">
                    {exposure.title}
                  </span>
                </span>
                <ChevronRightIcon
                  className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Projects table (small breakpoint and up) */}
      <div className="hidden mt-8 sm:block">
        <div className="align-middle inline-block min-w-full border-b border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr className="border-t border-gray-200">
                <th
                  className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  scope="col"
                >
                  <span className="lg:pl-2">Title</span>
                </th>
                <th
                  className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  scope="col"
                >
                  Camera
                </th>
                <th
                  className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  scope="col"
                >
                  Lens
                </th>
                <th
                  className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  scope="col"
                >
                  Film
                </th>
                <th
                  className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  scope="col"
                >
                  Last updated
                </th>
                <th
                  className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  scope="col"
                />
                <th
                  className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  scope="col"
                />
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {exposures.map((exposure) => (
                <tr key={exposure.id}>
                  <td className="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900">
                    <div className="flex items-center space-x-3 lg:pl-2">
                      <div
                        className={classNames(
                          exposure.bgColorClass,
                          'flex-shrink-0 w-2.5 h-2.5 rounded-full'
                        )}
                        aria-hidden="true"
                      />
                      <a href="#" className="truncate hover:text-gray-600">
                        <span>
                          {exposure.title}{' '}
                          {/* <span className="text-gray-500 font-normal">
                                  in {exposure.team}
                                </span> */}
                        </span>
                      </a>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-500 font-medium">
                    <div className="flex items-center space-x-2">
                      {exposure.camera}
                    </div>
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-500 font-medium">
                    <div className="flex items-center space-x-2">
                      {exposure.lens}
                    </div>
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-500 font-medium">
                    <div className="flex items-center space-x-2">
                      {exposure.film}
                    </div>
                  </td>
                  <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
                    {exposure.updatedAt}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap text-right text-sm font-medium">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </a>
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap text-right text-sm font-medium cursor-pointer">
                    <a
                      type="button"
                      onClick={() => deleteProject(exposure._id)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
