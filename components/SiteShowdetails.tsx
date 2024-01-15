
export default function siteMapRow(props: PageProps) {
  return (
    <>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

        <th
          scope="row"
          class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
        >
          <div class="ps-3">
            <div class="text-base font-semibold">Billing Head 1</div>
          </div>
        </th>
       
        <td class="px-6 py-4">
          <a
            href="/eachSiteAreaPage"
            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            &#8377;
          </a>
        </td>
        {/* <td class="px-6 py-4">
          <div class="flex items-center">
            <div class="flex items-center text-xl text-gray-500 truncate dark:text-gray-400">
              <div class="h-2.5 w-2.5 rounded-full bg-[#6afd2f] me-2"></div>{" "}
              Active
            </div>
          </div>
        </td> */}
        
      </tr>
    </>
  );
}
