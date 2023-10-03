import React, { useEffect, useRef } from 'react';
import GoogleMapsStyle from '../../data/google-maps/googleMapsStyle';

const Maps = () => {
	const mapRef = useRef(null);
	const map = useRef(null);

	useEffect(() => {
		const script = document.createElement('script');
		script.type = 'text/javascript';
		script.src =
			'https://maps.googleapis.com/maps/api/js?key=AIzaSyAtFb35xhesKqL6CU3GSJx7sTssDd33pjs';
		script.async = true;
		script.onload = () => {
			initMap();
		};
		document.body.appendChild(script);
	}, []);

	const initMap = () => {
		// 189 Bedford Ave, Brooklyn, NY 11211, United States
		const address_latlng = new window.google.maps.LatLng(
			40.71748,
			-73.95773
		);

		map.current = new window.google.maps.Map(mapRef.current, {
			center: address_latlng,
			zoom: 18,
			zoomControl: false,
			mapTypeControl: false,
			scaleControl: false,
			streetViewControl: false,
			rotateControl: false,
			fullscreenControl: false,
			styles: GoogleMapsStyle,
		});

		const icon = {
			url: '../../assets/img/demo/16_img.png',
			size: new window.google.maps.Size(112, 118),
		};

		map.current.setCenter(address_latlng);

		new window.google.maps.Marker({
			position: address_latlng,
			map: map.current,
			icon: icon,
		});
	};

	return (
		<div
			id='google-maps'
			ref={mapRef}
		></div>
	);
};

export default Maps;

// export default scriptLoader( ['https://maps.googleapis.com/maps/api/js?key=AIzaSyAtFb35xhesKqL6CU3GSJx7sTssDd33pjs'] )( Maps );
