import React, { Component } from "react";

class Admin extends Component {
  render() {
    return (
      <div class="p-4 bg-gray-100 rounded-lg shadow-lg">
        <h3 class="text-lg font-semibold mb-2">Lizard App - Administrador</h3>
        <p class="mb-4">Esta seccion es para el administrador</p>
        <table class="w-full border-collapse border border-gray-200">
          <thead>
            <tr class="bg-gray-200">
              <th class="border border-gray-300 px-4 py-2">ID</th>
              <th class="border border-gray-300 px-4 py-2">Name</th>
              <th class="border border-gray-300 px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t border-gray-200">
              <td class="border border-gray-300 px-4 py-2">1</td>
              <td class="border border-gray-300 px-4 py-2">John Doe</td>
              <td class="border border-gray-300 px-4 py-2">
                johndoe@example.com
              </td>
            </tr>
            <tr class="border-t border-gray-200">
              <td class="border border-gray-300 px-4 py-2">2</td>
              <td class="border border-gray-300 px-4 py-2">Jane Doe</td>
              <td class="border border-gray-300 px-4 py-2">
                janedoe@example.com
              </td>
            </tr>
            <tr class="border-t border-gray-200">
              <td class="border border-gray-300 px-4 py-2">3</td>
              <td class="border border-gray-300 px-4 py-2">Bob Smith</td>
              <td class="border border-gray-300 px-4 py-2">
                bobsmith@example.com
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Admin;
